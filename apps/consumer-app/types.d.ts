// eslint-disable-next-line
declare var __VERSION_STRING__: string;

// THE FULLSTORY TYPES ARE NOT NECESSARILY COMPREHENSIVE
type FullStoryUserDetails = {
  uid?: string;
  email?: string;
  displayName?: string;
  [key: string]: string | number | boolean | undefined | null;
};
// Docs: https://developer.fullstory.com/introduction
type FullStoryWindowObject = {
  setUserVars: (details: FullStoryUserDetails) => Promise<void>;
  getCurrentSessionURL: () => string;
  // FS.identify(uid, userVars); // userVars is a JSON dictionary
  identify: (uid: string, userVars: FullStoryUserDetails) => void;
} & ((uuid?: string) => Promise<void>);

interface Window {
  FS: FullStoryWindowObject | undefined;
}

declare let window: Window;
