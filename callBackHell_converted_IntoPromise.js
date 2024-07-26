





const download = (url) => {
  console.log("Starting to download data from", url);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Downloading completed");
      const content = "ABCDEF"; // Dummy content
      resolve(content);
    }, 10000);
  });
}


const writeFile = (data) => {
  console.log("Started writing a file with", data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Completed writing the data in a file");
      const filename = "file.txt"; // Dummy filename
      resolve(filename);
    }, 5000);
  });
}


const upload = (url, file) => {
  console.log("Started uploading", file, "on", url);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Upload completed");
      const response = "SUCCESS"; // Dummy response
      resolve(response);
    }, 2000);
  });
}


download("www.xyz.com")
  .then((content) => {
    console.log("We are now going to process the downloaded data");
    return writeFile(content);
  })
  .then((filename) => {
    console.log("We have downloaded and written the file, now will upload");
    return upload("www.upload.com", filename);
  })
  .then((response) => {
    console.log("We have uploaded with", response);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });



