import React from "react";
import useScript from "hooks/useScript";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginTop: theme.custom.appHeaderHeight,
    borderRadius: " 0px 100px 100px 0px",
    padding: "80px 80px 80px 89px",
    color: "#ffffff",
  },
}));

const Privacy = () => {
  // useScript({
  //   url: "https://app.termly.io/embed-policy.min.js",
  //   id: "termly-jssdk",
  // });

  const classes = useStyles();
  React.useEffect(() => {
    document.title = "IdeaPad | Privacy Policy";
  }, []);

  // return (
  //   <div
  //     className={classes.root}
  //     data-id="42db67e1-0337-4fe3-bfa3-fbc860f477c2"
  //     data-type="iframe"
  //     name="termly-embed"
  //   ></div>
  // );
  return (
    <div className={classes.root}>
      <h2>Privacy Policy</h2>
      <p>
        At <strong>Ideaology</strong>, we take your privacy seriously and are
        committed to protecting your personal information. This privacy policy
        explains how we collect, use, and protect your data when you play our
        pool multiplayer game Real Pool Ball, which uses PlayFab for sign-in,
        Firebase for tournament functionality, and Photon for multiplayer
        functionality.
      </p>

      <h2>I. Data Collection and Use</h2>
      <p>
        When you sign into Real Pool Ball using PlayFab, we collect your PlayFab
        ID and use it to track your progress and provide access to our Firebase
        tournament functionality. Firebase may collect additional information
        such as your email address if you choose to sign up for our newsletter
        or other promotional materials.
      </p>
      <p>
        We use Photon to facilitate multiplayer gameplay and may collect data
        related to your gaming activity, such as your IP address, location, and
        game metrics. This information is used to optimize gameplay and improve
        our services.
      </p>
      <p>
        We may also use cookies and other tracking technologies to collect
        information about your activity on our website and in our game. This
        information is used to personalize your experience, provide targeted
        advertising, and improve our services.
      </p>

      <h2>II. Buying and Withdrawing Idea Coins</h2>
      <p>
        We use Metamask and Chain Safe to enable the buying and withdrawing of
        Idea Coins in Real Pool Ball. When you use these services, you may be
        required to provide additional information such as your Ethereum wallet
        address or credit card information. This information is used solely for
        the purpose of processing your transactions and is not shared with third
        parties.
      </p>

      <h2>III. Data Protection</h2>
      <p>
        We take all reasonable measures to protect your personal information and
        prevent unauthorized access, disclosure, alteration, or destruction. We
        use industry-standard security protocols and encryption technologies to
        safeguard your data and ensure its integrity.
      </p>

      <h2>IV. Data Sharing</h2>
      <p>
        We do not sell or share your personal information with third parties
        except as required by law or to facilitate gameplay. For example, we may
        share your data with Photon to provide multiplayer functionality or with
        Firebase to enable tournament functionality.
      </p>
      <h2>V. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information at any time. You can also opt-out of promotional emails or
        other communications by following the instructions in the message. To
        exercise your rights, or if you have any questions or concerns about our
        data practices, please contact us at{" "}
        <a href="mailto:gaming@ideaology.io">gaming@ideaology.io</a>.
      </p>

      <p>
        By playing Real Pool Ball, you consent to our collection, use, and
        protection of your personal information in accordance with this privacy
        policy. If you do not agree to our terms, please do not use our
        services.
      </p>
      <h2>VI. Changes to the Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time to reflect changes
        in our data practices or legal requirements. We encourage you to review
        this policy periodically for any updates or changes.
      </p>
    </div>
  );
};

export default Privacy;
