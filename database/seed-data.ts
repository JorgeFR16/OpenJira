interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pending: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aut est quidem id dignissimos. Quidem, consequuntur optio incidunt voluptatem doloribus',
            status: 'pending',
            createdAt: Date.now(),
          },
          {
            description: 'In-Progress: Enim aut est quidem id dignissimos. Quidem, consequuntur optio incidunt voluptatem doloribus, itaque ex animi iusto non id magnam dignissimos rem iste!',
            status: 'in-progress',
            createdAt: Date.now()-1000000,
          },
          {
            description: 'Finished:itaque ex animi iusto non id magnam dignissimos rem iste!',
            status: 'finished',
            createdAt: Date.now()-100000,
          },
    ]
}