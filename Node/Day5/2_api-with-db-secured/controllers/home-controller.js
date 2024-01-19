exports.index = (req, res, next) => {
    res.render('home/index', { pageTitle: 'Employees API' })
}