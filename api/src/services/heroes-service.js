import poolDatabase from "../pool-database.js";

export default class HeroService {
  async findAll() {
    const [rows] = await poolDatabase.query("SELECT * FROM heroes");
    return rows;
  }
}
