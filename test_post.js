import "dotenv/config";
import fetch from "node-fetch";


const addUser = async (username) => {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username })
  });

  const data = await response.json();
  console.log("ユーザー追加:", data);
};

addUser("高橋風香")
const updateUser = async (id, newUsername) => {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable?id=eq.${id}`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: newUsername })
  });

  const data = await response.json();
  console.log(`ユーザーID ${id} の名前を更新:`, data);
};
updateUser(2, "田中花子")


const deleteUser = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/userTable?id=eq.${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
    }
  });

  if (response.ok) {
    console.log(`ユーザーID ${id} を削除しました`);
  } else {
    const error = await response.text();
    console.error(`削除失敗: ${error}`);
  }
};
deleteUser(3)




