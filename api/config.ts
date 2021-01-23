/**
 * Google Analytics query configurations
 *
 * ! If you are deploying this with your own account
 * ! , then you will need to change this config file.
 * ! Don't put your privateKey inside this file directly!
 */
export default {
  viewId: '236194295',
  auth: {
    projectId: 'reliable-sight-302605',
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: 'zihol-blog-analytics@reliable-sight-302605.iam.gserviceaccount.com',
  },
  allFilter: ['/post'],
  startDate: '2010-01-01',
}
