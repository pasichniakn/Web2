// Необхідні константи
const use_db = is_db_used();
const server_port = get_server_port();
const server_url = `http://localhost:${server_port}`;

// Перевірка, чи використовувати базу даних
// Якщо ні, то буде використовуватися localStorage
function is_db_used()
   { return $("head").attr("use_db"); }

// Метод повертає порт, який використовується для запуску сервера
function get_server_port()
   { return $("head").attr("server_port"); }

// ...............................................................................................

// Отримання даних із сервера
async function server_GET (req) {

   try {
      
   const res = await fetch(server_url + req,
                           { method: "GET",
                             headers: { "Accept": "application/json" } });

   if (res.ok) { return res.json(); }
   else { throw new Error(); }

   }

   catch (error) {
      
      if (error instanceof TypeError) {

         modal_confirm_create(
            "Помилка",
            "Не вдалося підключитися до сервера за адресою: " + server_url,
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }

      else {

         modal_confirm_create(
            "Помилка",
            "Не вдалося отримати інформацію з бази даних",
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }
   }
}

// Оновлення даних на сервері
async function server_PUT (req, array) {

   try {
   
   let collection;

   switch (req) {
      case "/set_planet":      collection = 1; break;
      case "/set_stantion":        collection = 2; break;
      case "/set_cargo":       collection = 3; break;
      case "/set_delivered": collection = 4; break;
      case "/set_identificators": collection = 5; break;
   }
   
   const res = await fetch(server_url + req,
                           { method: "PUT",
                             headers: { "Accept": "application/json",
                                        "Content-Type": "application/json" },
                             body: JSON.stringify({ array: array,
                                                    collection: collection }) }
                             );
   
   if (res.ok) { return res.json(); }
   else { throw new Error(); }
   
   }

   catch (error) {
      
      if (error instanceof TypeError) {

         modal_confirm_create(
            "Помилка",
            "Не вдалося підключитися до сервера за адресою: " + server_url,
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }

      else {

         modal_confirm_create(
            "Помилка",
            "Не вдалося оновити інформацію у базі даних",
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }
   }
}

// ...............................................................................................

// Зберігання даних
function save_data() {

   if (use_db === "true") { save_data_in_data_base();     }
   else                   { save_data_in_local_storage(); }

}

// Зберігання даних у localStorage
function save_data_in_local_storage() {

   let target = location.pathname.substring(1);

   switch (target) {

      case "planet":
         localStorage.setItem('planet', JSON.stringify(get_planet_list()));
         break;

      case "stantion":
         localStorage.setItem('stantion', JSON.stringify(get_stantion_list()));
         break;

      case "cargo":
         localStorage.setItem('cargo', JSON.stringify(get_cargo_list()));
         localStorage.setItem('delivered', JSON.stringify(get_cargo_list(true)));
         break;

      case "delivered":
         localStorage.setItem('delivered', JSON.stringify(get_cargo_list(true)));
         break;

   }

   let identificators = [{ "name":"last_planet_id","value":last_planet_id },
                         { "name":"last_stantion_id",  "value":last_stantion_id   },
                         { "name":"last_cargo_id", "value":last_cargo_id  }];

   localStorage.setItem('identificators', JSON.stringify(identificators));

}

// Зберігання даних у базу даних
function save_data_in_data_base() {

   let target = location.pathname.substring(1);

   switch (target) {

      case "planet":
         server_PUT("/set_planet", get_planet_list());
         break;

      case "stantion":
         server_PUT("/set_stantion", get_stantion_list());
         break;

      case "cargo":
         server_PUT("/set_cargo", get_cargo_list());
         server_PUT("/set_delivered", get_cargo_list(true));
         break;

      case "delivered":
         server_PUT("/set_delivered", get_cargo_list(true));
         break;

   }

   let identificators = [{ "name":"last_planet_id","value":last_planet_id },
                         { "name":"last_stantion_id",  "value":last_stantion_id   },
                         { "name":"last_cargo_id", "value":last_cargo_id  }];

   server_PUT("/set_identificators", identificators);

}

// ...............................................................................................

// Завантаження даних
async function load_data() {

   if (use_db === "true") { await load_data_from_data_base();     }
   else                   { await load_data_from_local_storage(); }

}

// Завантаження даних з localStorage
async function load_data_from_local_storage() {

   let item;
   let target = location.pathname.substring(1);

   switch (target) {

      case "planet":
         item = JSON.parse(localStorage.getItem("planet"));
         set_planet_list(item ? item : []);
         break;

      case "stantion":
         item = JSON.parse(localStorage.getItem("stantion"));
         set_stantion_list(item ? item : []);
         break;

      case "cargo":
         item = JSON.parse(localStorage.getItem("cargo"));
         set_cargo_list(item ? item : []);
         item = JSON.parse(localStorage.getItem("delivered"));
         set_cargo_list(item ? item : [], true);
         break;

      case "delivered":
         item = JSON.parse(localStorage.getItem("delivered"));
         set_cargo_list(item ? item : [], true);
         break;

   }

   let identificators = JSON.parse(localStorage.getItem("identificators"));
   if (!identificators) { identificators = []; }

   for (let item of identificators) {
      if (item.name === "last_planet_id") { last_planet_id = item.value; }
      if (item.name === "last_stantion_id")   { last_stantion_id   = item.value; }
      if (item.name === "last_cargo_id")  { last_cargo_id  = item.value; }
   }
}

// Завантаження даних з бази даних
async function load_data_from_data_base() {

   let target = location.pathname.substring(1);

   switch (target) {

      case "planet":
         await server_GET("/get_planet").then((res) =>
            { set_planet_list(res); });
         break;

      case "stantion":
         await server_GET("/get_stantion").then((res) =>
            { set_stantion_list(res); });
         break;

      case "cargo":
         await server_GET("/get_cargo").then((res) =>
            { set_cargo_list(res); });
         await server_GET("/get_delivered").then((res) =>
            { set_cargo_list(res, true); });
         break;

      case "delivered":
         await server_GET("/get_delivered").then((res) =>
            { set_cargo_list(res, true); });
         break;

   }

   await server_GET("/get_last_planet_id").then((res) =>
      { if (res && res.length > 0) { last_planetl_id = res[0].value; }});

   await server_GET("/get_last_stantion_id").then((res) =>
      { if (res && res.length > 0) { last_stantion_id = res[0].value; }});

   await server_GET("/get_last_cargo_id").then((res) =>
      { if (res && res.length > 0) { last_cargo_id = res[0].value; }});

}

// Отримання даних
async function get_data (data) {

   if (use_db === "true") { return await get_data_from_data_base(data);     }
   else                   { return await get_data_from_local_storage(data); }

}

// Отримання даних з localStorage
async function get_data_from_local_storage (data) {
   
   try           { return JSON.parse(localStorage.getItem(data)); }
   catch (error) { return [];                                     }

}


// Отримання даних з бази даних
async function get_data_from_data_base (data) {

   try           { return await server_GET(`/get_${data}`); }
   catch (error) { return [];                               }

}