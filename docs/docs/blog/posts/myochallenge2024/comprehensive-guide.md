---
draft: false
date: 2024-08-20
categories:
    - Dev
    - MyoSuite
---

# Comprehensive Guide to MyoChallenge 2024

This blog post is designed to help you quickly understand and participate in [MyoChallenge 2024](https://sites.google.com/view/myosuite/myochallenge/myochallenge-2024){:target="_blank"}. It lists all the resources you can refer to at each stage of the Challenge.

The table of contents to the right explains all the stages you'll go through to participate in MyoChallenge 2024, starting from scratch. Feel free to skip any sections you're already familiar with.

<!-- more -->

Let’s get started!! :airplane:

<!-- ![header](https://myosuite.readthedocs.io/en/latest/_images/MyoChallenge24_manip.png) -->


---

## :mechanical_arm: **Understand MyoSuite**

![MyoSuite Logo](https://github.com/myohub/myosuite/blob/main/docs/source/images/Full%20Color%20Horizontal%20wider.png?raw=true){: style="width: 80%;"}

MyoSuite is the foundation of MyoChallenge. It's a platform with a collection of environments/tasks to be solved by musculoskeletal models to understand human dexterity and agility, developed by researchers at Meta AI. You can learn basic information about it from these places to get started:

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

    </font>

---

## :trophy: **Understand MyoChallenge 2024**

MyoChallenge 2024 is a competition held as part of the [NeurIPS 2024](https://neurips.cc){:target="_blank"} conference, focusing on advancing physiological dexterity and agility in bionic humans.

### **[Tasks](https://sites.google.com/view/myosuite/myochallenge/myochallenge-2024#h.sin8wxsvajtw){:target="_blank"}**

MyoChallenge 2024 has two types of tasks:

![Manipulation](https://myosuite.readthedocs.io/en/latest/_images/MyoChallenge24_manip.png){: style="width: 35%;", align=left}

**Manipulation**

Transfer objects between two points, involving a hand-off between a biological arm ([myoArm](https://myosuite.readthedocs.io/en/latest/suite.html#myoarm){:target="_blank"}) and a prosthetic arm ([MPL; Modular Prosthetic Limb](https://www.jhuapl.edu/work/projects-and-missions/revolutionizing-prosthetics/research){:target="_blank"}). Object properties and environmental factors are randomized for each attempt to thoroughly evaluate model performance.

<br style="clear: left;">

![Manipulation](https://myosuite.readthedocs.io/en/latest/_images/MyoChallenge24_loco_1.png){: style="width: 35%;", align=left}

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

### **Development Environment**



---

## :robot: **Develop Your Solution**

This is where your skill comes into play! :fire:

### **Start with Baseline**

Before jumping into the development, you can run the pre-trained baselines MyoSuite provides to check how it performs. It can be also used as a starting point where your solution is based.

You can visit the following official tutorials on Google Colab to learn:

1. How to start a training script that can reproduce the baseline
2. How to tune the reward dictionary
3. How to access new attributes (e.g., MPL joint angles) and integrate them into your training

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


### **Improve your solution**


---

## :material-upload: **Submit Your Solution**

---

## :bulb: **Tips for Success**

### **Leverage Community Resources**


### **Collaborate and Learn**


### **Stay Updated**


