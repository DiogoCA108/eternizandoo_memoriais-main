import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { SoundtrackPlayer } from "../components/SoundtrackPlayer";

// Mock framer-motion since it can be problematic in jsdom/node test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useAnimation: () => ({
    start: vi.fn(),
    set: vi.fn(),
  }),
}));

// Mock lucide-react
vi.mock("lucide-react", () => ({
  Play: () => <span>Play</span>,
  Pause: () => <span>Pause</span>,
  Music: () => <span>Music</span>,
  Volume2: () => <span>Volume2</span>,
  VolumeX: () => <span>VolumeX</span>,
}));

describe("SoundtrackPlayer", () => {
  let playMock: any;
  let pauseMock: any;

  beforeEach(() => {
    playMock = vi.fn().mockImplementation(() => Promise.resolve());
    pauseMock = vi.fn();

    // Mock global Audio
    global.Audio = vi.fn().mockImplementation(() => ({
      play: playMock,
      pause: pauseMock,
      loop: false,
      volume: 0,
      src: "",
    })) as any;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should pause audio when document becomes hidden and resume when it becomes visible", async () => {
    const onTogglePlay = vi.fn();
    const onStateChange = vi.fn();

    render(
      <SoundtrackPlayer
        urlAudio="test.mp3"
        isPlaying={true}
        onTogglePlay={onTogglePlay}
        onStateChange={onStateChange}
      />
    );

    // Initial play call should happen because isPlaying is true
    expect(playMock).toHaveBeenCalled();

    // Reset calls
    playMock.mockClear();
    pauseMock.mockClear();

    // Mock document.hidden = true
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => true,
    });

    // Dispatch visibilitychange event
    document.dispatchEvent(new Event("visibilitychange"));

    // Verify audio paused
    expect(pauseMock).toHaveBeenCalled();

    // Mock document.hidden = false
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => false,
    });

    // Dispatch visibilitychange event
    document.dispatchEvent(new Event("visibilitychange"));

    // Verify audio resumed (since isPlaying was/is true)
    expect(playMock).toHaveBeenCalled();
  });

  it("should not resume audio when document becomes visible if isPlaying was false", async () => {
    const onTogglePlay = vi.fn();
    const onStateChange = vi.fn();

    render(
      <SoundtrackPlayer
        urlAudio="test.mp3"
        isPlaying={false}
        onTogglePlay={onTogglePlay}
        onStateChange={onStateChange}
      />
    );

    // Initial play call should not happen because isPlaying is false
    expect(playMock).not.toHaveBeenCalled();

    // Reset calls
    playMock.mockClear();
    pauseMock.mockClear();

    // Mock document.hidden = true
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => true,
    });

    // Dispatch visibilitychange event
    document.dispatchEvent(new Event("visibilitychange"));

    // Verify audio paused (it's fine if it is called or not, let's verify visibility logic)
    expect(pauseMock).toHaveBeenCalled();

    pauseMock.mockClear();

    // Mock document.hidden = false
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => false,
    });

    // Dispatch visibilitychange event
    document.dispatchEvent(new Event("visibilitychange"));

    // Verify audio DID NOT resume since isPlaying is false
    expect(playMock).not.toHaveBeenCalled();
  });
});
