const adminMiddleware = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Usuario no autenticado' });
    }
    if (user.rolUser !== 'ADMIN') {
        return res.status(403).json({ message: 'Usuario no autorizado' });
    }
    next();
};
export default adminMiddleware;
