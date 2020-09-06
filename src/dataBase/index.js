let instance;

module.exports = (async function () {
    if (!instance) {
        // Create instance of your data base connection if does not exist. 
        instance = await Promise.resolve({}).catch(error => {
            throw error;
        });
    }
    return instance;
}());
