export const getYogaRecommendations = (problem) => {
    const data = {
      "back pain": [
        "Child's Pose: Relieves tension in the spine and neck.",
        "Cobra Pose: Improves spinal flexibility and reduces lower back pain.",
        "Cat-Cow Pose: Gently stretches the spine and improves posture.",
      ],
      stress: [
        "Downward Dog: Stretches and calms the body.",
        "Lotus Pose: Enhances relaxation and mindfulness.",
        "Corpse Pose: Promotes complete relaxation and reduces anxiety.",
      ],
      "neck pain": [
        "Seated Neck Stretch: Relieves stiffness in the neck and shoulders.",
        "Thread the Needle: Stretches the back, neck, and shoulders.",
        "Ear-to-Shoulder Stretch: Eases tension in the upper neck muscles.",
      ],
      insomnia: [
        "Legs-Up-the-Wall Pose: Calms the nervous system and promotes sleep.",
        "Butterfly Pose: Relaxes the hips and reduces stress.",
        "Happy Baby Pose: Reduces tension and helps with deep relaxation.",
      ],
      "low energy": [
        "Mountain Pose: Improves focus and revitalizes the body.",
        "Sun Salutation: Energizes the entire body through fluid movements.",
        "Chair Pose: Strengthens and stimulates the muscles and mind.",
      ],
      "digestion issues": [
        "Seated Forward Bend: Improves digestion and stimulates the abdominal organs.",
        "Twist Pose: Relieves bloating and aids digestion.",
        "Wind-Relieving Pose: Eases stomach discomfort and improves bowel movement.",
      ],
    };
  
    const key = Object.keys(data).find((k) => problem.toLowerCase().includes(k));
    return key
      ? data[key]
      : ["No specific recommendations found for your input. Try again with more details!"];
  };
  