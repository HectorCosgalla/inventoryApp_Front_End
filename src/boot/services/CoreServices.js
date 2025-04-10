import { Notify } from "quasar";

import { api } from "../axios";

const roundCancel =
  "M0 0h24v24H0V0z@@fill:none;opacity:.87;&&M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z";

  async function post(url,data) {
    const response = await api.post(url, data);
    try {
      const newObjectURL = response.headers.location.split(api.getUri()+'/');
      const newObject = await api.get(newObjectURL[1]);
      return newObject.data
    } catch (error) {
      console.log(error);
      notify("something wnet wrong!")
    }
  }

  async function getAll(url){
    try {
      const response = api.get(url)
      return (await response)
    } catch (error) {
      console.log(error);
    }
  }

  async function patch(url,data){
    try {
      await api.patch(url,data);
    } catch (error) {
      console.log(error);
    }
  }

  function notify(message){
    return Notify.create({
      message: message,
      icon: roundCancel,
      color: "warning",
      position: "bottom-left",
      timeout: 3000,
    });
  }

export default {post, getAll, patch}
