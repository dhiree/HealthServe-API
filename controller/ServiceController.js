const serviceModel = require('../models/serviceModel');

class userService {
    async createService(req, res) {
        const { name, description, price } = req.body;
        if (!name || !description || price == null) {
            return res.status(400).json({ message: 'Name, description, and price are required' });
        }

        try {
            const newService = await serviceModel.create({ name, description, price });
            res.status(201).json({ data: newService });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getService(req, res) {
        try {
            const services = await serviceModel.find();
            res.status(200).json({ data: services });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getServiceById(req, res) {
        try {
            const { id } = req.params;
            const serviceById = await serviceModel.findById(id);

            if (!serviceById) {
                return res.status(404).json({ message: 'Service not found' });
            }

            res.status(200).json({ data: serviceById });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateService(req, res) {
        try {
            const { id } = req.params;
            const serviceData = req.body;

            const updatedService = await serviceModel.findByIdAndUpdate(id, serviceData, { new: true });

            if (!updatedService) {
                return res.status(404).json({ message: 'Service not found' });
            }

            res.status(200).json({ data: updatedService });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteService(req, res) {
        try {
            const { id } = req.params;
            const service = await serviceModel.findByIdAndDelete(id);

            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }

            res.status(200).json({ message: 'Service deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new userService();
