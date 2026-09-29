import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpIcon, RotateCwIcon } from "lucide-react";
import Button from "@/components/base-ui/button";
import { Bubble, BubbleContent } from "@/components/base-ui/bubble";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/base-ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/base-ui/input-group";
import { Message, MessageContent } from "@/components/base-ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/base-ui/message-scroller";

type ChatMessage = { id: string; role: "user" | "assistant"; text: string };

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    text: "Every time the AI streams a reply, the whole thread jumps around.",
  },
  {
    id: "2",
    role: "assistant",
    text: "Wrap your list in MessageScroller. The viewport follows new tokens while you're at the bottom, and backs off as soon as you scroll up to read something earlier.",
  },
  {
    id: "3",
    role: "user",
    text: "And new messages won't feel like the conversation reloads?",
  },
  {
    id: "4",
    role: "assistant",
    text: "Set scrollAnchor on the new turn. It settles near the top and keeps a peek of the previous exchange, so the reply starts in view without a jarring jump.",
  },
];

const reply =
  "Scroll up while this streams: auto-scroll stops, your position is kept, and a button appears at the bottom to jump back to the latest message. Tap it and auto-scroll picks up again, just like Slack or iMessage.";

export default function MessageScrollerDemo() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => () => clearInterval(timer.current), []);

  function send(event: FormEvent) {
    event.preventDefault();
    if (!input.trim() || streaming) return;

    const id = String(Date.now());
    const words = reply.split(" ");
    let count = 0;

    setMessages((m) => [
      ...m,
      { id, role: "user", text: input },
      { id: `${id}-reply`, role: "assistant", text: "" },
    ]);
    setInput("");
    setStreaming(true);

    timer.current = setInterval(() => {
      count++;
      setMessages((m) =>
        m.map((msg) =>
          msg.id === `${id}-reply`
            ? { ...msg, text: words.slice(0, count).join(" ") }
            : msg
        )
      );
      if (count >= words.length) {
        clearInterval(timer.current);
        setStreaming(false);
      }
    }, 60);
  }

  function reset() {
    clearInterval(timer.current);
    setStreaming(false);
    setMessages(initialMessages);
  }

  return (
    <MessageScrollerProvider autoScroll>
      <Card
        style={{
          width: "100%",
          maxWidth: "384px",
          height: "440px",
          gap: 0,
          paddingBlockEnd: 0,
        }}>
        <CardHeader
          style={{
            paddingBlockEnd: "16px",
            borderBottom: "1px solid var(--color-border)",
          }}>
          <CardTitle>New Chat</CardTitle>
          <CardDescription>How can I help you today?</CardDescription>
          <CardAction>
            <Button
              variant="outline"
              size="icon-sm"
              aria-label="Reset conversation"
              onClick={reset}>
              <RotateCwIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <MessageScroller style={{ flex: 1 }}>
          <MessageScrollerViewport>
            <MessageScrollerContent style={{ padding: "24px" }}>
              {messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.role === "user"}>
                  <Message align={message.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      {message.role === "user" ? (
                        <Bubble variant="muted">
                          <BubbleContent>{message.text}</BubbleContent>
                        </Bubble>
                      ) : (
                        <Bubble variant="ghost">
                          <BubbleContent>{message.text || "…"}</BubbleContent>
                        </Bubble>
                      )}
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
        <form onSubmit={send} style={{ padding: "12px" }}>
          <InputGroup>
            <InputGroupInput
              placeholder="Send a message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="submit"
                variant="primary"
                size="icon-xs"
                aria-label="Send"
                disabled={!input.trim() || streaming}>
                <ArrowUpIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </Card>
    </MessageScrollerProvider>
  );
}
