const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;      // importar nome da imagem p/ BD
        const { company, techs, price } = req.body;         // importar company,techs,price do body
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'user does not exist' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map( tech => tech.trim()), //tech.trim = tira os espacos da array
            price
        })

        return res.json(spot)
    }
}