const {
  getAllJobs,
  getJob,
  updateJob,
  createJob,
  deleteJob,
} = require('../controllers/jobs')
const express = require('express')
router = express.Router()

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob)

module.exports = router
