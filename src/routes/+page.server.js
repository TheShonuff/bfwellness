import { supabase } from "$lib/supabaseClient";

function getFormattedDate(date) {
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

const currentDate = getFormattedDate(new Date());

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data1 = await request.formData();
    const first_name = data1.get("first_name");
    const last_name = data1.get("last_name");
    const email = data1.get("email");

    const { data, error } = await supabase.from("contacts").insert([
      {
        created_at: currentDate,
        first_name: first_name,
        last_name: last_name,
        email: email,
      },
    ]);
  },
};

//Generate and insert statmet to submit data from form to Supabase
