const url = 'https://ozdsyadckqfwdhznjkmf.supabase.co/functions/v1/elevenlabs-tts';
const key = 'sb_publishable_B5hZVlbylrLmpQ6chBSQdQ_gEPh2Rf3';

fetch(url, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ text: "konnichiwa" })
})
.then(res => res.json().then(data => ({status: res.status, data})))
.then(console.log)
.catch(console.error);
