exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_form = (req, res) => {
    res.render('add_form');
}

exports.update_form = (req, res) => {
    res.render('update_form');
}