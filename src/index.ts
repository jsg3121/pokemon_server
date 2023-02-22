import 'reflect-metadata'
import { runServer } from './app'
import { initData } from './init'

const run = async () => {
  // await initData()
  await runServer()
}

run()
