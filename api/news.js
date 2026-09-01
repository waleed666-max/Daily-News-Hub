module.exports = async (req, res) => {
  const { category = "general", page = 1, pagesize = 8, country = "us" } = req.query;
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pagesize}`;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};