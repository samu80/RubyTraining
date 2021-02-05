class Hangman

  def initialize(word)
      @word = word.downcase
      @current_word = "_" * word.length
  end

  def guess_letter(g_letter)
    g_letter.downcase
    @word.split("").each_with_index do |w_letter, index|
        if g_letter == w_letter
          @current_word[index] = g_letter
            puts "Good job! Go ahead!"
    p @current_word
        end
      if !@word.include? (g_letter)
        puts "Incorrect ,try again"
      end
    end
end

    def won_game?
      
      if    @word == @current_word
          puts "Original Word is: "+@word
          puts "You guessed:"+ @current_word
          puts "Congratulations, you won!"
          true
          
      else
            false
      end
    end

end

puts "Welcome to the Hangman Game!"
puts "Enter word to guess..."
game_word = gets.chomp
game = Hangman.new(game_word)

attempts = 0
guessed_letters = []


while attempts != game_word.length + 2 do 
  puts "Please guess new letter..."
    letter_guess = gets.chomp
    if guessed_letters.include? letter_guess
        puts "You already tried that letter, enter a new one."
        letter_guess = gets.chomp
    end
    guessed_letters << letter_guess
  game.guess_letter(letter_guess)
  if(game.won_game?)
    break
  end
  
  attempts += 1 
  if(attempts == game_word.length + 2 )
    puts "You lost the game"
  end

end

