import prisma from '../config/db.js';

export async function findAll({completed}) {
  let conditions = {};
  if(completed) {
    let completedValue = completed === 'true';
    conditions = {completed: completedValue};
  }
  return prisma.task.findMany({where: conditions});
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
