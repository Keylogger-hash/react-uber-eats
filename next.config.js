/** @type {import('next').NextConfig} */
const withPwa = require('next-pwa')({
    dest:'public'
})
const nextConfig = {

}

module.exports = withPwa({
    nextConfig
})
