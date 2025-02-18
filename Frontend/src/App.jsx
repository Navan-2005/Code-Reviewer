import { useState, useEffect } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import prism from 'prismjs'
import Editor from 'react-simple-code-editor'
import './App.css'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [code, setCode] = useState(``)
  const [review, setReview] = useState(``)
  
  useEffect(() => {
    prism.highlightAll()
  }, [code])

  async function reviewCode() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}ai/get-review`, { code });
    // const response = await axios.post('https://code-reviewer-dij2.onrender.com//ai/get-review', { code });

    console.log(response.data);
    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              placeholder='Enter your code here. Kindly wait till you get the review..'
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
              }}
              className="editor-container"
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App