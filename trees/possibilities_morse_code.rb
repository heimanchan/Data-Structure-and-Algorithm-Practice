# Given a binary tree of Morse code, find the possibilities of a code with missing signal.
# E.g. "." => ["E"]
# E.g. "-" => ["T"]
# E.g. ".?." => ["S", "R"]

def possibilities(word)
  root = Tree.new("Root")
  node_E = root.left = Tree.new("E")
  node_T = root.right = Tree.new("T")
  node_I = node_E.left = Tree.new("I")
  node_A = node_E.right = Tree.new("A")
  node_N = node_T.left = Tree.new("N")
  node_M = node_T.right = Tree.new("M")
  node_S = node_I.left = Tree.new("S")
  node_U = node_I.right = Tree.new("U")
  node_R = node_A.left = Tree.new("R")
  node_W = node_A.right = Tree.new("W")
  node_D = node_N.left = Tree.new("D")
  node_K = node_N.right = Tree.new("K")
  node_G = node_M.left = Tree.new("G")
  node_O = node_M.right = Tree.new("O")
  
  result = helper(root, word).select { |node| node if node.is_a?(Tree)}.map{ |node| node.value}
end

class Tree
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
  end

end

def helper(root, word, count = 0, result = [])
#   print root.value
  return root if count == word.length
  
  if word[count] == "."
    count += 1
    result.push(helper(root.left, word, count, result)) 
  elsif word[count] == "-"
    count += 1
    result.push(helper(root.right, word, count, result)) 
  elsif word[count] == "?"
    count += 1
    result.push(helper(root.left, word, count, result)) 
    result.push(helper(root.right, word, count, result)) 
  end
  
  result
end