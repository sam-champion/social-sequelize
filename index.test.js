const { Comment, Like, Post, Profile, User } = require("./index");
const { sequelize } = require("./db/connection.js");
const fs = require("fs").promises;

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await sequelize.sync({ force: true });
  });

  // Write your tests here

  test("can create a user", async function () {
    const data = await fs.readFile("./seed/users.json", "utf-8");
    const usersArray = JSON.parse(data);
    const users = await User.bulkCreate(usersArray);
    expect(users[0].username).toBe("john_doe");
    expect(users[0].email).toBe("john_doe@example.com");
  });

  test("can create a profile", async function () {
    const data = await fs.readFile("./seed/profiles.json", "utf-8");
    const profilesArray = JSON.parse(data);
    const profiles = await Profile.bulkCreate(profilesArray);
    expect(profiles[0].bio).toBe("I'm a software engineer");
    expect(profiles[0].profilePicture).toBe("https://example.com/profile1.jpg");
    expect(profiles[0].birthday).toBe("1990-06-15");
  });

  test("can create a post", async function () {
    const data = await fs.readFile("./seed/posts.json", "utf-8");
    const postsArray = JSON.parse(data);
    const posts = await Post.bulkCreate(postsArray);
    expect(posts[0].title).toBe("Hiking in Yosemite");
    expect(posts[0].body).toBe(
      "I had an amazing time hiking in Yosemite National Park!"
    );
    expect(posts[0].createdAt).toBe("2022-03-15T10:30:00.000Z");
  });

  test("can create a comment", async function () {
    const data = await fs.readFile("./seed/comments.json", "utf-8");
    const commentsArray = JSON.parse(data);
    const comments = await Comment.bulkCreate(commentsArray);
    expect(comments[0].body).toBe("This is a great post!");
    expect(comments[0].createdAt).toBe("2022-01-01T12:00:00Z");
  });

  test("can create a like", async function () {
    const data = await fs.readFile("./seed/likes.json", "utf-8");
    const likesArray = JSON.parse(data);
    const likes = await Like.bulkCreate(likesArray);
    expect(likes[0].reactionType).toBe("👍");
    expect(likes[0].createdAt).toBe("2022-03-20T10:00:00Z");
  });
});
