export function setAlertValues() {
  const statusClasses = ["weaker", "weak", "medium", "strong", "stronger"];
  
  const statusTitle = [
    "You should have changed your password long ago!",
    "It's time to change the password!",
    "Not bad, but don't relax too much.",
    "Good password, well done.",
    "Great, Mr. Robot would be proud of your password!",
  ];
  const statusText = [
    "They can crack your password faster than spelling deoxyribonucleic",
    "You can run a marathon while they crack your password.",
    "You can sleep easy until the new quantum generation arrives.",
    "Congratulations, you can come and go from Mars while they crack your password.",
    "Mind-blowing, Artificial Intelligence will solve the chess game rather than crack your password!",
  ];
  const data = { statusClasses, statusTitle, statusText };
  return data;
}
