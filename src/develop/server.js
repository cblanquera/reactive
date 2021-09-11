const babel = require('@babel/register')
babel(require('./config/babel'))
require('./express')
