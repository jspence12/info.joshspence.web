import { sleep } from "./util";
describe("util", () => {
  describe(sleep.name, () => {
    it("waits for expected time", async () => {
      const msInterval = 50;
      const startTime = new Date();
      await sleep(msInterval);
      const endTime = new Date();
      expect(endTime.valueOf() - startTime.valueOf()).toBeGreaterThanOrEqual(
        msInterval,
      );
    });
  });
});
