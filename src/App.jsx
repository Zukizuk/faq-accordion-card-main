import "./App.scss";

function App() {
  return (
    <>
      <main className="main">
        <div className="illustration"></div>
        <div className="faq__container">
          <h1>FAQ</h1>
          <details className="question__block">
            <summary className="question">
              How many team members can I invite?
            </summary>

            <p className="answer">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </details>
          <details open className="question__block">
            <summary className="question">
              What is the maximum file upload size?
            </summary>
            <p className="answer">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </details>
          <details className="question__block">
            <summary className="question">How do I reset my password?</summary>
            <p className="answer min">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </details>
          <details className="question__block">
            <summary className="question">
              Can I cancel my subscription?
            </summary>
            <p className="answer">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </details>
          <details className="question__block">
            <summary className="question">
              Do you provide additional support?
            </summary>
            <p className="answer">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </details>
        </div>
      </main>
    </>
  );
}

export default App;
