function includeHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(id);
      container.innerHTML = data;

      // 삽입된 HTML 내부의 <script> 태그 실행
      container.querySelectorAll("script").forEach((oldScript) => {
        const newScript = document.createElement("script");
        newScript.textContent = oldScript.textContent;
        document.body.appendChild(newScript);
        oldScript.remove();
      });
    })
    .catch((error) => console.error(`Error loading ${file}:`, error));
}
