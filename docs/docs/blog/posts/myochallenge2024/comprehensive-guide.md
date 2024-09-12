---
title: Comprehensive Guide to MyoChallenge 2024
description: Your complete roadmap for conquering MyoChallenge 2024 from start to finish.
draft: false
date:
    created: 2024-08-20
    updated: 2024-09-12
categories:
    - Dev
    - MyoSuite
social:
  cards_layout_options:
    logo: https://raw.githubusercontent.com/MyoHub/myosuite/main/docs/source/images/logo/SVG/Full%20Color/Full%20Color%20Icon.svg
---

# Comprehensive Guide to MyoChallenge 2024

This blog post is designed to help you quickly understand and participate in [MyoChallenge 2024](https://sites.google.com/view/myosuite/myochallenge/myochallenge-2024){:target="_blank"}. It lists all the resources you can refer to at each stage of the Challenge.

<!-- more -->

The table of contents to the right explains all the stages you'll go through to participate in MyoChallenge 2024, starting from scratch. Feel free to skip any sections you're already familiar with.

Let’s get started!! :airplane:

<br>

---

## :mechanical_arm: **Understand MyoSuite**

![MyoSuite Logo](https://github.com/myohub/myosuite/blob/main/docs/source/images/Full%20Color%20Horizontal%20wider.png?raw=true){: style="width: 80%;"}

MyoSuite is the foundation of MyoChallenge. It's a platform with a collection of environments/tasks to be solved by musculoskeletal models to understand human dexterity and agility. This is an open-source software (OSS) project, with contributions and participation from researchers, developers, and enthusiasts from across the globe.

<iframe src="https://www.google.com/maps/d/embed?mid=1yiZ2BqEvCwSus4ToEQFQqE10Cj4GxkM&ehbc=2E312F" width=450rem height=280rem style="margin: 0 auto; display: block;"></iframe>

You can learn basic information about it from these places to get started:

!!! quote ""

    <font size=3>

    - [:material-web: MyoSuite Official Website](https://sites.google.com/view/myosuite){:target="_blank"}
    - [:simple-github: GitHub - myosuite](https://github.com/MyoHub/myosuite){:target="_blank"}
    - [:simple-readthedocs: Welcome to MyoSuite’s documentation!](https://myosuite.readthedocs.io/){:target="_blank"}
    - [:simple-youtube: MyoSuite - overview & tutorial (ICRA 2024)](https://youtu.be/CGFrRXfVVHw){:target="_blank"}

    </font>

### **Do you know `gym`?**

MyoSuite is basically a superset of [`gymnasium`](https://gymnasium.farama.org){:target="_blank"} (former [`gym`](https://github.com/openai/gym){:target="_blank"} maintained by OpenAI) with musculoskeletal extensions, and it generally adheres to its usage.

If you're not familiar with the `gymnasium`, it is highly recommended to get familiar with it first.  

!!! quote ""

    <font size=3>

    - [:simple-openaigym: Gymnasium Documentation](https://gymnasium.farama.org/){:target="_blank"}
    - [:simple-openaigym: Tutorials - Gym Documentation](https://www.gymlibrary.dev/content/tutorials/){:target="_blank"}
    
    </font>

### **Learn Usage with Tutorial**

To get hands-on with MyoSuite, follow the tutorials provided in the official documentation. These tutorials cover various aspects of using MyoSuite, from setting up the environment to running simulations. Especially, it’s better to check the section [“Using Reinforcement Learning”](https://myosuite.readthedocs.io/en/latest/tutorials.html#using-reinforcement-learning){:target="_blank"} because that is essentially the same process you’ll follow to check you own policy.

!!! quote ""

    <font size=3>

    - [:simple-readthedocs: Tutorials](https://myosuite.readthedocs.io/en/latest/tutorials.html){:target="_blank"}
    - :simple-googlecolab: MyoSuite v2 Tutorial 1 (May 2024) [![Open On Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1zFuNLsrmx42vT4oV8RbnEWtkSJ1xajEo){:target="_blank"}

    </font>

---

## :trophy: **Understand MyoChallenge 2024**

MyoChallenge 2024 is a competition held as part of the [NeurIPS 2024](https://neurips.cc){:target="_blank"}, focusing on advancing physiological dexterity and agility in bionic humans.

### **Tasks**

MyoChallenge 2024 has two types of tasks:

![Manipulation](https://myosuite.readthedocs.io/en/latest/_images/MyoChallenge24_manip.png){: style="width: 35%;", align=left}

**Manipulation**

Transfer objects between two points, involving a hand-off between a biological arm ([myoArm](https://myosuite.readthedocs.io/en/latest/suite.html#myoarm){:target="_blank"}) and a prosthetic arm ([MPL; Modular Prosthetic Limb](https://www.jhuapl.edu/work/projects-and-missions/revolutionizing-prosthetics/research){:target="_blank"}). Object properties and environmental factors are randomized for each attempt to thoroughly evaluate model performance.

<br style="clear: left;">

![Locomotion](https://myosuite.readthedocs.io/en/latest/_images/MyoChallenge24_loco_1.png){: style="width: 35%;", align=left}

**Locomotion**

Navigate varied terrains using a biological leg ([myoLeg](https://myosuite.readthedocs.io/en/latest/suite.html#myoleg){:target="_blank"}) and a prosthetic leg ([OSL; Open Source Leg](https://neurobionics.robotics.umich.edu/research/wearable-robotics/open-source-leg/){:target="_blank"}). Challenge difficulty is randomized, potentially altering terrain types and introducing obstacles to test adaptability.

<br style="clear: left;">

Both tasks aim to develop strategies to enable both the biological limbs simulated by [MyoSim](https://github.com/MyoHub/myo_sim){:target="_blank"} and the prosthetic limbs to work together successfully and achieve objectives.

For more detailed descriptions, refer to the official documentation of MyoChallenge 2024.

!!! quote ""

    <font size=3>

    - [:mechanical_arm: MyoSuite - MyoChallenge-2024](https://sites.google.com/view/myosuite/myochallenge/myochallenge-2024#h.sin8wxsvajtw){:target="_blank"}
    - [:simple-readthedocs: MyoChallenge-2024 Documentations](https://myosuite.readthedocs.io/en/latest/challenge-doc.html){:target="_blank"}
    - [Competition Track 2024 - NeurIPS](https://neurips.cc/Conferences/2024/CompetitionTrack){:target="_blank"}
    - [:simple-medium: Medium - MyoSuite Team](https://medium.com/@myosuite){:target="_blank"}

    </font>

### **Timeline**

| Time           | Stage                | Detail                                         |
|----------------|----------------------|------------------------------------------------|
| Jul - Aug 2024 | Open Stage           | Release of the models and tasks environment.   |
| Sep - Oct 2024 | Scored Stage         | Opening of submission on the scoring platform. |
| Dec 10, 2024   | Results Announcement | @NeurIPS 24                                    |
| Dec 14, 2024   | Workshop             | @NeurIPS 24                                    |

---

## :material-account-cog: **Prepare Accounts and Resources**

### **EvalAI**

MyoChallenge uses [EvalAI](https://eval.ai){:target="_blank"} to manage the competition (e.g. model submission, ranking scores). You need to [create an account](https://eval.ai/auth/signup){:target="_blank"} and get credentials to submit your model. The step-by-step tutorial on how you can get credentials on EvalAI is explained [below](#submit-your-solution).

Before the Scored stage (Sep-Oct), you can refer to the [challenge page for MyoChallenge 2023](https://eval.ai/web/challenges/challenge-page/2105/overview){:target="_blank"} to understand how the challenge will be handled on this platform.

!!! quote ""

    <font size=3>

    - [:material-rocket: Sign up on EvalAI](https://eval.ai/auth/signup){:target="_blank"}
    - [:material-rocket: EvalAI - MyoChallenge2023](https://eval.ai/web/challenges/challenge-page/2105/overview){:target="_blank"}

    </font>

### **Development Environment**

MyoSuite only requires a Python environment, but it would be advantageous to prepare a computer or cloud environment with GPU resources to accelerate the training process of the policy. A free GPU resource with limited usage is available on Google Colab.

!!! success "Google Cloud Credits Available!"

    <font size=3>

    We are pleased to announce that Google Cloud Platform is sponsoring MyoChallenge '24! Participants are now eligible to receive Google Cloud credits, providing access to advanced computational resources on Google Colaboratory.

    - [:simple-googleforms: Apply for Google Cloud Credits](https://docs.google.com/forms/d/e/1FAIpQLSez1Qp8Tvj65hYJOKbLL8hbIoG9igXc9zHfB4im586TaTJeLw/viewform){:target="_blank"}
    </font>


### **Form/Join a Team**

Participating in MyoChallenge 2024 can be done individually or as part of a team. Consider the strategy of your participation based on your skills, resources, and goals.

To form or join a team:

1. Review the team formation rule:
    
    > **Team formation / Eligibility:** There is no limit to the team size and the affiliation: participants from both academic and industrial institutions are welcome. Each participant will be allowed to join only one team during registration and this cannot be changed during the competition. [[ref](https://github.com/MyoHub/myosuite/discussions/206#discussioncomment-10329857){:target="_blank"}]

1. Network with potential teammates through the official MyoChallenge forums, MyoSuite community, social media, etc
1. Agree on team structure, roles, and communication methods
1. Register your team on EvalAI

---

## :robot: **Develop Your Solution**

This is where your skill comes into play! :fire:

### **Start with Baseline**

Before starting the development process, it is recommended to run the pre-trained baselines provided by MyoSuite to assess its performance. Additionally, this can be used as a foundation for your solution.

You can visit the following official tutorials on Google Colab to learn:

- How to start a training script that can reproduce the baseline
- How to tune the reward dictionary
- How to access new attributes (e.g., MPL joint angles) and integrate them into your training

!!! quote ""

    <font size=3>

    - :simple-googlecolab: Tutorial1 - Policy Training with Random Actions & Visualization [![Open On Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1AqC1Y7NkRnb2R1MgjT3n4u02EmSPem88?usp=sharing){:target="_blank"}
    - :simple-googlecolab: Tutorial2 - Getting Started with Baselines [![Open On Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1YJqhKWKNJ6MFUKqTQYLilc9M6BdBfA3g?usp=sharing){:target="_blank"}

    </font>

Tutorials for MyoChallenge 2023 can also be your help.

!!! quote ""

    <font size=3>

    - [:simple-github: GitHub - myochallenge_2023eval](https://github.com/MyoHub/myochallenge_2023eval/tree/main?tab=readme-ov-file#overview){:target="_blank"}
    - [:simple-github: GitHub - myochallenge_2023eval/tutorials/run_the_baselines.md](https://github.com/MyoHub/myochallenge_2023eval/blob/main/tutorials/run_the_baselines.md){:target="_blank"}

    </font>


### **Enhance the Model**

Once you've developed your initial model, the next step is to enhance it to improve performance on the tasks. This process may involve experimenting with different RL algorithms, fine-tuning hyperparameters, engineering new features, shaping the reward function, analyzing and visualizing the results, and etc. These techniques can help optimize your model's performance and provide insights into areas for further improvement.

The development process is iterative. Continuously evaluate your model's performance, identify areas for improvement, and refine your approach. Regular evaluation is essential to understand how well your enhancements are working and whether further adjustments are needed.

---

## :material-upload: **Submit Your Solution**

After training your model, you can submit it by following the steps below. You can achieve this [via GitHub Actions](https://github.com/MyoHub/myochallenge_2023eval/blob/main/tutorials/GHaction_Submission.md){:target="_blank"} or [manually by building and uploading a Docker container](https://github.com/MyoHub/myochallenge_2023eval/blob/main/tutorials/DIY_Submission.md){:target="_blank"}. The EvalAI credential info is required for both options.

=== "GitHub Actions"

    1. Obtain your Auth token on EvalAI
    1. Clone the MyoChallenge submission repository: myochallenge_2024eval (TBA)
    1. Register your token as a secret in the repo
    1. Edit the existing agent file to use your policy
    1. Test your agent
    1. Trigger the action

=== "DIY Submission"

    1. Install Docker
    1. Obtain your Auth token on EvalAI
    1. Clone the MyoChallenge submission repository: myochallenge_2024eval (TBA)
    1. Customize Agent Script
    1. Build a docker container with the agent
    1. Upload the container to the [EvalAI docker registry](https://eval.ai/web/challenges/challenge-page/2105/submission){:target="_blank"}

The Colab below also provides detailed step-by-step instructions for the entire submission process of MyoChallenge 2023.

!!! quote ""

    <font size=3>

    - [:simple-github: GitHub - myochallenge_2023eval](https://github.com/MyoHub/myochallenge_2023eval){:target="_blank"}
    - :simple-googlecolab: MyoChallenge Submission Tutorial [![Open On Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1Az9B0tOJmm962v1PjjRUTEQGCY5ebqQG){:target="_blank"}

    </font>

---

## :bulb: **Tips for Success**

### **Leverage Community Resources**

MyoSuite has an active community of researchers and developers worldwide. Engage with the community to exchange ideas, seek advice, and stay updated on the latest developments. When you have any questions about MyoSuite/MyoChallenge, you can ask the community on both [GitHub Issues](https://github.com/MyoHub/myosuite/issues){:target="_blank"} and [GitHub Discussions](https://github.com/MyoHub/myosuite/discussions/206){:target="_blank"}. 

Should you encounter any issues or bugs that have not yet been raised, please do not hesitate to submit them as an issue on the GitHub repository. This will help us resolve the problem quickly!

!!! quote ""

    <font size=3>

    - [:simple-github: GitHub Issues - myosuite](https://github.com/MyoHub/myosuite/issues){:target="_blank"}
    - [:simple-github: MyoChallenge/MyoSuite Q&A](https://github.com/MyoHub/myosuite/discussions/206){:target="_blank"}
    - [:material-web: MyoSuite Advocacy Team](https://sites.google.com/view/myochallenge-2024-advocacy){:target="_blank"}

    </font>

You can join the MyoSuite community on our official Slack channel from here: [![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)](https://join.slack.com/t/myosuite/shared_invite/zt-1zkpw2zzk-NhVhVlSDxhoMHbzROD8gMA){:target="_blank"}

### **Collaborate and Learn**

Participate in webinars or Q&A sessions organized by the MyoChallenge team to deepen your understanding. Connecting with others and forming a team can also enhance your experience and foster collaboration.

### **Stay Updated**

Please check the [MyoChallenge 2024 website](https://sites.google.com/view/myosuite/myochallenge/myochallenge-2024){:target="_blank"} regularly for announcements and updates. We also encourage you to follow Myosuite on social media for the latest updates and tips. Staying informed will ensure you don't miss any important notifications.

!!! quote ""

    <font size=3>

    - Follow us on X [![X Follow](https://img.shields.io/twitter/follow/MyoSuite?style=social)](https://x.com/MyoSuite){:target="_blank"}
    - Give a Star [![GitHub stars](https://img.shields.io/github/stars/MyoHub/myosuite?style=social)](https://github.com/MyoHub/myosuite){:target="_blank"}

    </font>

<br>

---

<br>

MyoChallenge 2024 is your opportunity to learn and innovate. We encourage you to leverage the resources provided, engage with the community, and enjoy the learning process. Your unique perspective is valuable, and we're excited to see what you'll achieve!

Best of luck in your MyoChallenge journey :rocket:

<br>
