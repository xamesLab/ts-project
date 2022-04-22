import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req, res, next) => {
    logging.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        message: 'pong!'
    });
};

export default { sampleHealthCheck };
