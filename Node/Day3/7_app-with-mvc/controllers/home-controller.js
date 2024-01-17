exports.index = (req, res, next) => {
    res.render('home/index', { pageTitle: 'Index View' })
}

exports.about = (req, res, next) => {
    res.render('home/about', { pageTitle: 'About View' })
}

exports.contact = (req, res, next) => {
    res.render('home/contact', { pageTitle: 'Contact View' })
}