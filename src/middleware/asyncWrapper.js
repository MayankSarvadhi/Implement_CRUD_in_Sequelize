export const asyncWrapper = (passFunction) => (req, res, next) => {
    Promise.resolve(passFunction(req, res, next)).catch(next);
}; 