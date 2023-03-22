type Data = {
  message?: string;
  error?: string;
};

/**
 * Claim endpoint handler.
 * @param {NextApiRequest} req API request
 * @param {NextApiResponse<Data>} res API response
 */
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Collect session
  const session = await unstable_getServerSession(req, res, authOptions);

  // Collect address
  const { address }: { address: string } = req.body;

  if (!session) {
    // Return unauthenticated status
    return res.status(401).send({ error: "Not authenticated." });
  }

  if (!address || !isValidAddress(address)) {
    // Return invalid wallet address status
    return res.status(400).send({ error: "Invalid wallet address." });
  }

  const claimed: boolean = await hasClaimed(session, address);
  if (claimed) {
    // Return already claimed status
    return res
      .status(400)
      .send({ error: "Already claimed in a given window." });
  }

  try {
    // Process faucet drip
    await processDrip(address);
  } catch (error: unknown) {
    console.log(error);

    // If error in process, revert
    return res
      .status(500)
      .send({ error: "Unexpected error. Try again later." });
  }

  const key = getKey(session) as string;
  await redisClient
    .multi()
    .set(key, "true", "EX", Number(process.env.DRIP_DELAY))
    .set(address, "true", "EX", Number(process.env.DRIP_DELAY))
    .exec();

  return res
    .status(200)
    .json({ message: "Faucet tokens claim processed successfully." });
};

export default handler;