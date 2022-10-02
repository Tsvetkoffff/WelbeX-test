const db = require('../db')

class Controller {
  async createRow(req, res) {
    const {date, title, amount, distance} = req.body
    const newRow = await db.query(
      `INSERT INTO schedule (date, title, amount, distance) values ($1, $2, $3, $4) RETURNING *`,
      [date, title, amount, distance]
    )
    res.json(newRow.rows)
  }
  async getRows(req, res) {
    const table = await db.query(`SELECT * FROM schedule`)
    res.json(table.rows)
  }
}

module.exports = new Controller()
