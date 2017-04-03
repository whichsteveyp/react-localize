export default {

  login: 'Sign in via egghead',

  instructorGuide: 'Instructor Guide',

  instructorsOnly: 'Only instructors can view the Instructor Center',

  routeNotFound: {
    title: '404 - page not found',
    description: `This page doesn't exist.`,
  },

  logo: {
    alt: 'egghead.io instructors logo',
  },

  pagination: {
    previous: 'Previous',
    next: 'Next',
  },

  navigation: {
    dashboard: 'Dashboard',
    lessons: 'Lessons',
    instructors: 'Instructors',
    guide: 'Guide',
    chat: 'Chat',
    logout: 'Log Out',
    action: 'New lesson',
  },

  getPublished: {
    title: 'Get Published',
    description: 'Work with your mentor to complete these items so you can get published.',
  },

  help: {
    title: 'Help',
    description: 'Making screencasts is hard. The first few can be frustrating. But it gets easier and faster! There are many resources to help you as well.',
    guide: {
      description: `We've put together a written Instructor Guide with step by step details on creating egghead lessons and courses. It is required reading for all instructors, and will help you make great lessons.`,
      action: 'View the guide',
    },
    admins: {
      description: 'Joel and Trevor can help with anything related to egghead.io.',
      action: 'Reach out in Slack',
    },
    chat: {
      description: `The egghead-instructors Slack channel is available for instructors to chat and see each other's progress.`,
      action: 'View the channel',
    },
  },

  instructorStats: {
    title: 'Instructor Stats',
    lessons: '%s published',
    courses: '%s published',
  },

  instructorRevenue: {
    title: 'Instructor Revenue',
    subscriberMinutes: '%s minutes',
    currentMonth: {
      title: 'This Month So Far',
    },
    previousMonths: {
      title: 'Last %s Months',
    },
    revenue: 'Revenue',
    minutesWatched: 'Member Minutes Watched',
    action: 'View Details',
  },

  requestedLessons: {
    title: 'Requested Lessons',
    description: `Here's some ideas for lessons that you can start recording today. If you claim one of these ideas, you'll have 2 weeks to record a draft and upload it. After that it goes back into the pool for others to claim.`,
    fallback: 'There are no requested lessons, but you can create your own.',
    proposeLesson: { title: 'Propose a Lesson',
      description: 'Have an idea for an egghead lesson? Fill out this information and get started. Feel free to submit as many ideas as you like.',
      lessonTitle: 'Title *',
      lessonTechnology: 'Technology *',
      lessonSummary: 'Summary',
      missingInputError: 'Missing required form input',
      action: 'Propose a new lesson',
      submit: 'Submit',
    },
  },

  lessonEdit: {
    edit: 'Edit',
    uploadVideo: 'Upload Video',
    replaceVideo: 'Replace Video',
  },

  lessonStates: {
    proposed: {
      action: 'Propose',
      description: `This lesson is proposed and is waiting for review to be accepted.`,
    },
    cancelled: {
      action: 'Cancel',
      description: `This lesson has been cancelled.`,
    },
    accepted: {
      action: 'Accept',
      description: `This lesson has been accepted - it can be claimed.`,
    },
    requested: {
      action: 'Request',
      description: `This lesson has been requested - it can be claimed.`,
    },
    claimed: {
      action: 'Claim',
      description: `This lesson is claimed. Now it needs a video to be added and lesson details filled out.`,
    },
    submitted: {
      action: 'Submit',
      description: 'Sweet! This lesson has been submitted and is waiting for review to be approved.',
    },
    rejected: {
      action: 'Ask for Changes',
      description: 'Changes have been requested for this lesson. Please update the lesson as requested.',
      title: 'Changes Needed',
    },
    updated: {
      action: 'Apply Update',
      description:  'Lesson updated! Waiting for review to be approved.',
    },
    approved: {
      action: 'Approve',
      description: 'This lesson has been approved.',
    },
    published: {
      action: 'Publish',
      description: `This lesson has been published. It is available publicly for students to view on egghead.io.`,
    },
    flagged: {
      action: 'Flag',
      description: `This lesson has been flagged - it needs to be revised or it will need to be retired.`,
    },
    revised: {
      action: 'Revise',
      description: `This lesson has revised and is no longer flagged.`,
    },
    retired: {
      action: 'Retire',
      description: `This lesson has been retired.`,
    },
  },

  lessonGroups: {
    instructorTitle: `%s's Lessons`,
    allTitle: 'All Lessons',
    fallback: 'No lessons to show',
    action: 'Create a new lesson',
    inProgress: {
      title: 'In Progress',
    },
    inReview: {
      title: 'In Review',
      description: 'These lessons are waiting for review to proceed.',
      selfApproval: `Since you have 0+ lessons published, you can review your own lessons.`,
    },
    inQueue: {
      title: 'In Queue',
      description: 'These lessons are in the publishing queue. The queue automatically publishes them from top to bottom. Lessons that are in a course are not shown here because they are held back until the entire course is published.',
    },
    published: {
      title: 'Published',
      description: 'Published lessons and courses are available publicly for students to view on egghead.io.',
      action: 'View published content',
    },
  },

  lesson: {
    video: {
      title: 'Video',
      fallback: 'There is no video to show - waiting for one to be uploaded.',
    },
    state: 'State',
    actions: 'Actions',
    instructor: 'Instructor',
    technology: 'Technology',
    summary: 'Summary',
  },

  instructorGroups: {
    title: 'Instructors',
    fallback: 'No instructors to show',
    unpublished: {
      title: 'Unpublished',
    },
    published: {
      title: 'Published',
    },
  },

}
