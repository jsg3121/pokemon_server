import { PrismaClient } from '@prisma/client'

export const initData = async () => {
  const prisma = new PrismaClient()

  const dataList = await prisma.pokemon.findMany()

  try {
    dataList.map(async (data) => {
      return await prisma.pokemon.update({
        where: {
          number: data.number,
        },
        data: {
          type: data.typeSingle2
            ? [data.typeSingle1, data.typeSingle2]
            : [data.typeSingle1],
        },
      })
    })

    console.log('success')
  } catch (err) {
    console.log('fail')
  }
}
