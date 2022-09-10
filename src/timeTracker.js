export default function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000; //seconds to years

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }

  interval = seconds / 2592000; //seconds to months
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }

  interval = seconds / 86400; //seconds to days
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }

  interval = seconds / 3600; //seconds to hours
  if (interval > 1) {
    return Math.floor(interval) + "hours ago";
  }

  interval = seconds / 60; //seconds to minutes
  if (interval > 1) {
    return Math.floor(interval) + "minutes ago";
  }

  return "few seconds ago ";
}
