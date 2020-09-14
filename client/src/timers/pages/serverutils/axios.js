import axios from "axios";
//all urls in this file like /timers are end points to a server running on another port not on 3000(react port ) but by putttin a proxy in the package.json in the CRA(react app) i tell react to act as a proxy to access the APIS endpoints
//instead of using the browser to go and access the api and the react-server seperately which may result in CORS errors by using this proxy it will be our react server that will make the request to the API instead with i.e(we prevent the browser from accesing two seperate servers it only needs to talk to react server and react talks to our api without cors problems). and there will be no cors problems

//routing in a browser uses a stack ,anchor tags just add to that stacck reflected in the browsers address bar .pressing back is popping an element in that stack and viewing the latest url at the top:
// with vanilla anchor tags each time a url is added it makes a request to the server again for resources but react-router-dom doesnt do that it prevvents that default behaviour of the browser and only looks at that url and determines the next component to render based on that
//endpoint it creates a context i.e the react-router and gives it to all its children it also interacts with the window.history api
// it creates a history listens for any change in the url and forces a rerender upon a change triggerd by clicking a link tag
//

// that stack am talking about listens to a change in the url before it reloads i.e window.history api in ur browser listens when u click an anchor tag and upon listenig it now knows that it is to go to that end point
const get_timers = (callback) => {
  return axios({
    method: "GET",
    url: "/api/getTimers",
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => {
      if (res.statusText !== "OK") {
        throw Error("server had problems fetching data");
      }
      return res;
    })
    .then(callback)
    .catch((e) => console.log(e));
};
const post_timer = (timers) => {
  return axios({
    method: "POST",
    url: "/timers",
    headers: {
      accept: "application/json",
    },
    data: {
      ...timers,
    },
  })
    .then((res) => {
      if (res.statusText !== "Created") {
        throw Error("server had problems fetching data");
      }
    })
    .catch((e) => console.log(e));
};
const delete_timer = (timer_id) => {
  return axios({
    method: "DELETE",
    url: `/timers/${timer_id}`,
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
};
const patch_timer = (timer) => {
  return axios({
    method: "PATCH",
    url: `/timers/`,
    headers: {
      accept: "application/json",
    },
    data: {
      ...timer,
    },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => console.log(e));
};

const client = { get_timers, post_timer, delete_timer, patch_timer };
export default client;
