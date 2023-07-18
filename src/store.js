import { reactive } from "vue";

const url = "http://localhost:8000/";
export const store = reactive({
  baseUrl: url,
  getImageUrl(image) {
    return image
      ? url + "storage/uploads/" + image
      : url + "storage/uploads/default.jpg";
  },
});
