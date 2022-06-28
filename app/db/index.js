import allPlots from './plots.json'
import allSeeds from './plots-seed.json'
import allVegetables from './vegetables.json'


const addMockLatency = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.floor(Math.random() * (600 - 400)) + 400);
    });
};

export const vegetables = {
    getAll: () => {
        return addMockLatency(allVegetables);
    },
    get: (id) => {
        return addMockLatency(
            allVegetables.find(i => i.id === id)
        );
    },
};

export const plots = {
    getAll: () => {
        return addMockLatency(
            allPlots.map((plot) => {
                const vegetable =  allVegetables.find(i => i.id === plot.vegetableId)
                return {
                    ...plot,
                    vegetable,
                };
            })
        );
    },
    get: (id) => {
        const plot = allPlots.find(i => i.id === id)
        const vegetable = allVegetables.find(i => i.id === plot.vegetableId)
        return addMockLatency({
            ...plot,
            vegetable,
        });
    },
    update: (id, data) => {
        const found = allPlots.find(i => i.id === id)
        return found
        // db.plots.update(
        //     { id },
        //     { ...found, ...data },
        //     { multi: false, upsert: false }
        // );

        // return addMockLatency(
        //     db.plots.findOne({
        //         id,
        //     })
        // );
    },
    delete: (id) => {
        // db.plots.update(
        //     { id },
        //     {
        //         "id": id,
        //         "name": `Plot ${id}`,
        //         "vegetableId": null,
        //         "note": null,
        //         "date": null
        //     },
        //     { multi: false, upsert: false }
        // );

        // return addMockLatency(
        //     db.plots.findOne({
        //         id,
        //     })
        // );
        return
    },
};
