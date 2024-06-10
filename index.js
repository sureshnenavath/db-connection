const express = require('express')
const app = express()
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const dbPath = path.join(__dirname, 'goodreads.db')
let db = null

const initialization = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server is running')
    })
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
}
initialization()
