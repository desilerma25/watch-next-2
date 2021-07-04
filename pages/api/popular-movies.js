// req = HTTP incoming msg, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({text: 'Does this work?'})
}