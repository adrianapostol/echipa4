// create default task if none exist
if (Tasks.find().count() === 0) {
    Tasks.insert(
        {
            taskId: 'UID1',
            taskName: 'Task name',
            taskDescription: 'Task Description',
            createdAt: new Date(),
            createdBy: null,
            participant: true
        });
}

