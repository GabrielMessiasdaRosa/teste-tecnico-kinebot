import HeroService from "../services/heroes-service.js";

const heroService = new HeroService();

export const getHeroes = async (req, res) => {
  try {
    const heroes = await heroService.findAll();
    console.log(heroes);
    if (!heroes) {
      res.status(404).json({ message: "Heroes not found" });
    }
    res.status(200).json(heroes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
