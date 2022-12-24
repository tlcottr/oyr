const getActivities = () => {
  const activitiesLink =
    "https://www.strava.com/api/athlete/activities?access_token=f096c36388904ec6cf8ae3f591271327a7231d04";
  fetch(activitiesLink).then((res) => console.log(res));
};
