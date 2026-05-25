1. Installation & Basic Setup
Bash
# Terminal में पैकेज इंस्टॉल करने के लिए
npm install react-router-dom
JavaScript
// index.js / main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 1. Router इनेबल करने के लिए इम्पोर्ट करें

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* 2. पूरे ऐप को इसके अंदर रैप करें ताकि राउटिंग कॉन्टेक्स्ट मिल सके */}
    <App />
  </BrowserRouter>
);
2. Basic, Nested, and Dynamic Route Configuration
JavaScript
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Settings from './Settings';
import User from './User';
import Post from './Post';

function App() {
  return (
    <Routes> {/* सभी Routes को होल्ड करने वाला कंटेनर */}
      
      {/* Root/Home Route */}
      <Route path="/" element={<Home />} /> 
      
      {/* Standard Static Route */}
      <Route path="/about" element={<About />} /> 
      
      {/* Nested Routing: /account पैरेंट है, जिसके अंदर सब-राउट्स हैं */}
      <Route path="/account">
        <Route path="profile" element={<Profile />} />   {/* URL बनेगा: /account/profile */}
        <Route path="settings" element={<Settings />} /> {/* URL बनेगा: /account/settings */}
      </Route>

      {/* Dynamic Routing: ':' का मतलब है कि userName की जगह कुछ भी बदल सकता है */}
      <Route path="/users/:userName" element={<User />} />

      {/* Dynamic Route for API integration example */}
      <Route path="/post/:postId" element={<Post />} />

    </Routes>
  );
}

export default App;
3. Reading URL Parameters using useParams
JavaScript
// User.jsx
import { useParams } from 'react-router-dom';

const User = () => 
  {
  const params = useParams(); // URL से डायनामिक वैल्यूज को ऑब्जेक्ट के रूप में निकालता है

  return (
    <div>
      {/* अगर URL '/users/ishan' है, तो params.userName की वैल्यू 'ishan' होगी */}
      <h1>Profile Page of: {params.userName}</h1>
    </div>
  );
};

export default User;
4. Advanced Example: Dynamic API Fetching based on Routes
JavaScript
// Post.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Post = () => {
  const { postId } = useParams(); // URL से सीधे postId को डिस्ट्रक्चर (Destructure) किया
  const [post, setPost] = useState(null);

  useEffect(() => {
    // URL की postId के आधार पर स्पेसिफिक डेटा फेच करना
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]); // जब भी URL में postId बदलेगी, यह इफेक्ट दोबारा चलेगा

  if (!post) return <h3>Loading post content...</h3>;

  return (
    <fieldset style={{ padding: '20px', borderRadius: '8px' }}>
      <legend>Post ID: {postId}</legend>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </fieldset>
  );
};

export default Post;